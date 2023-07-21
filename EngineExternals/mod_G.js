const objetoHtmlDefault = {
  id: "",
  class: " d-flex align-items-center justify-content-center w-100 h-100 mb-2",
  styles: "background-color: green;  position: relative;",
  chields: {
    div_parent: {
      //class: "popup divParent justify-content-center",
      chields: {
        div: {
          class: "d-flex justify-content-end orange-bg",
          chields: {
            btnClose: {
              type: "button",
              id: "closeKeyBoard",
              class: "closed buttonAux mr-2",
            },
          },
        },
        div_1: {
          content: "Default Content",
          type: "p",
          id: "error",
          class: "rounded d-flex justify-content-center",
          styles: "background-color: grey; width: 280px; min-height: 150px;",
        },
      },
    },
  },
};

function gTime(refArtifact, mode = true, reset = true) {
  if (!refArtifact.statusValidate) {
    if (mode) {
      if (!refArtifact.timerState) {
        refArtifact.timer = setInterval(function () {
          refArtifact.timeInteraction++;

          if (refArtifact.debug) {
            console.log(refArtifact.timeInteraction);
          }
        }, 1000);
        refArtifact.timerState = true;
      }
    } else {
      if (refArtifact.timer) {
        clearInterval(refArtifact.timer);
        refArtifact.timerState = false;
        if (reset) {
          refArtifact.timeInteraction = 0;
        }
      }
    }
  }
}

function gAxies({
  refArtifact,
  board,
  axie,
  position,
  values,
  color = "#A19D9C",
} = {}) {
  if (!axie) {
    console.log("ponle una direction valueAxis:{ xd/yd: [[0, 0], [1, 0]],}");
    return;
  }

  const auxAxie = board.create("axis", axie);
  board.create("ticks", [auxAxie, position || false], {
    drawLabels: true,
    labels: values || false,
    label: {
      autoPosition: true,
      offset: [-5, 0],
      anchorX: "middle",
      anchorY: "top",
      visible: true,
    },
  });

  auxAxie.setAttribute({
    color: color,
    ticks: { visible: false },
  });
}

//points: [{ x: -3, y: 0, visible: true, interactive: true, fixed: true },]
function gAllPointsDefault(params = {}) {
  return params.points.map((p, i) => {
    let point = null;
    if (Array.isArray(p)) {
      point = params.board.create("point", [p[0], p[1]], {
        size: p[4] || 2,
        name: p[3] != undefined ? p[3] : "",
        label: {
          visible: undefined != p[3] && p[3] != "" ? true : false,
          autoPosition: true,
          offset: [0, 10],
        },
        fixed: false,
        visible: p[2] == undefined ? false : p[2],
        fillcolor: typeof p[5] == "string" ? p[5] : p[5] ? "white" : "#D55E00",
        strokeColor: typeof p[5] == "string" ? p[5] : "#D55E00",
        ...p,
      });
    } else {
      point = params.board.create("point", [p.x, p.y], {
        size: 2,
        label: {
          visible: p.name != undefined,
          autoPosition: true,
          offset: [0, 10],
        },
        fixed: false,
        visible: false,
        fillcolor: "#D55E00",
        strokeColor: "#D55E00",
        ...p,
      });
    }
    point.ignore = params.ignore;
    if (p.interactive) {
      point.on("down", () => params.callback({ ...params, point, i }));
    }
    return point;
  });
}

function gLineDefault(params = {}) {
  if (!Array.isArray(params.lines)) {
    params.lines = [params.lines];
  }
  return params.lines.map((l) => {
    const line = params.board.create(
      "line",
      typeof l.points[0] == "object" && typeof l.points[1] == "object"
        ? l.points
        : gAllPointsDefault({ ...params, points: l.points }),
      {
        strokeColor: "black",
        fixed: true,
        straightFirst: false,
        straightLast: false,
        firstArrow: false,
        lastArrow: false,
        strokeWidth: 2,
        name: l.name,
        label: {
          visible: l.name,
          autoPosition: true,
        },
        precision: {
          touch: 8,
          mouse: 3,
          pen: 5,
          hasPoint: 1,
        },
        ...l,
      }
    );
    line.iMod = params.iMod;
    if (l.name) {
      gTextDefault({ ...params, texts: [l.name] });
    }
    if (l.interactive) {
      line.on("down", () => params.callback({ ...params, attractor: line }));
    }
    return line;
  });
}

/* curves: [{
   name: { text: "j", x: 2, y: 1, }, interactive: true, form: 0,
   points: [[-3, -3], [-2, -1], [0, 0], [2, 1], [3, 2.95]],
}] */
function gCurveDefault(params = {}) {
  return params.curves.map((c) => {
    const style = {
      strokeColor: "black",
      strokeWidth: 1.5,
      fixed: true,
      label: {
        autoPosition: true,
        visible: true,
      },
      precision: {
        touch: 8,
        mouse: 3,
        pen: 5,
        hasPoint: 1,
      },
      ...c,
    };
    const cAux = params.board.create(
      "cardinalspline",
      [
        gAllPointsDefault({ ...params, points: c.points }),
        c.form != undefined ? c.form : 1,
        "centripetal",
      ],
      style
    );
    if (c.name) {
      gTextDefault({ ...params, texts: [c.name] });
    }
    cAux.iMod = params.iMod;
    if (c.interactive) {
      cAux.on("down", () => params.callback({ ...params, attractor: cAux }));
    }
    return cAux;
  });
}

function gPolygon(params = {}) {
  return params.polygons.map((polygon) => {
    if (polygon.name) {
      gTextDefault({ ...params, texts: [polygon.name] });
    }
    return params.board.create("polygon", polygon.points, {
      fixed: true,
      withLines: false,
      fillColor: "grey",
      fillOpacity: 0.1,
      vertices: { visible: false, fixed: true },
      ...polygon.styles,
    });
  });
}
function gArcDefault(params = {}) {
  return params.arcs.map((a) => {
    const arc = params.board.create(
      "arc",
      gAllPointsDefault({ points: a.points, ...params }),
      a.style
    );
    if (a.name) {
      gTextDefault({ ...params, texts: [a.name] });
    }
    if (a.interactive) {
      arc.on("down", () => callback({ ...params, attractor: arc }));
    }
    return arc;
  });
}
function gTextDefault(params = {}) {
  return params.texts.map((t) => {
    const style = {
      fontSize: 20,
      fixed: true,
      ...t.style,
    };
    const text = params.board.create("text", [t.x, t.y, t.text], style);
    if (t.interactive) {
      text.on("down", () =>
        callback[callback["text"] ? "text" : "default"](
          refArtifact,
          board,
          id,
          text
        )
      );
    }
    return text;
  });
}
//genera un board pasandole la referencia y las propiedades del board
function gBoard(refArtifact, boardSelect, id, style, callback = {}) {
  callback = {
    default: (refArtifact, board, id, ithem) =>
      gFuntionDefault(refArtifact, board, id, ithem),
    ...callback,
  };
  const resultObj = {};
  style.reflectionAxie = {
    Y: style.reflectionAxie?.Y || false,
    X: style.reflectionAxie?.X || false,
    B: style.reflectionAxie?.B || false,
  };

  let board = JXG.JSXGraph.initBoard(id, {
    label: { visible: false },
    axis: style.axis[0] || false,
    boundingbox: style.boundingbox || [-4, 4, 4, -4],
    maxboundingbox: [-8, 8, 8, -8],
    grid: style.grid || false,
    grid: { strokeColor: !style.grid ? false : "grey" },
    showNavigation: false,
    showCopyright: false,
    keyboard: {
      enabled: false,
      dy: 30,
      panShift: true,
      panCtrl: false,
    },
    pan: {
      needTwoFingers: true,
      enabled: false,
      needShift: true,
    },
    zoom: {
      needShift: false,
      pinchHorizontal: false,
      pinchVertical: false,
      pinchSensitivity: 0,
      min: 1000,
      max: 0,
      factorX: 0,
      factorY: 0,
      wheel: false,
    },
  });

  if (!style.axis[0] && style.axis[1]) {
    gAxies({
      refArtifact,
      board,
      axie: style.valueAxis?.xd,
      position: style.valueAxis?.xp,
      values: style.valueAxis?.xv,
      color: style.valueAxis?.colorx,
    });
  }

  if (!style.axis[0] && style.axis[2]) {
    gAxies({
      refArtifact,
      board,
      axie: style.valueAxis?.yd,
      position: style.valueAxis?.yp,
      values: style.valueAxis?.yv,
      color: style.valueAxis?.colory,
    });
  }

  const simetriAxies = [
    {
      points: [
        [-8, -8],
        [8, 8],
      ],
      visible: style.reflectionAxie.B,
    }, //bisectriz
    {
      points: [
        [-8, 0],
        [8, 0],
      ],
      visible: style.reflectionAxie.X,
    }, //eje x
    {
      points: [
        [0, -8],
        [0, 8],
      ],
      visible: style.reflectionAxie.Y,
    }, // eje Y
  ];

  reflectionAxie = gLineDefault({
    refArtifact,
    board,
    id,
    lines: simetriAxies,
  });
  reflectionAxie = {
    axieB: reflectionAxie[0],
    axieX: reflectionAxie[1],
    axieY: reflectionAxie[2],
  };
  //pintar lista de points
  if (boardSelect.points) {
    resultObj.points = gAllPointsDefault({
      callback: callback.point || callback.default,
      refArtifact,
      board,
      id,
      points: boardSelect.points,
    });
  }
  //pintar lista de lineas
  if (boardSelect.lines) {
    resultObj.lines = gLineDefault({
      callback: callback.line || callback.default,
      refArtifact,
      board,
      id,
      lines: boardSelect.lines,
    });
  }
  //pintar lista de curvas
  if (boardSelect.curves) {
    resultObj.curves = gCurveDefault({
      callback: callback.curve || callback.default,
      refArtifact,
      board,
      id,
      curves: boardSelect.curves,
    });
  }

  //pintar lista de textos
  if (boardSelect.texts) {
    resultObj.texts = gTextDefault({
      callback: callback.text || callback.default,
      refArtifact,
      board,
      id,
      texts: boardSelect.texts,
    });
  }

  if (boardSelect.polygons) {
    resultObj.polygon = gPolygon({
      callback: callback.polygon || callback.default,
      refArtifact,
      board,
      id,
      polygons: boardSelect.polygons,
    });
  }

  if (boardSelect.arcs) {
    resultObj.arcs = gArcDefault({
      callback: callback.arc || callback.default,
      refArtifact,
      board,
      id,
      arcs: boardSelect.arcs,
    });
  }
  return { board, reflectionAxie, resultObj };
}
//agrega avisos sobre ek board
function gAlerts(refArtifact, id, text, type = 1, size = 15) {
  if (refArtifact.textAlert) {
    refArtifact.textAlert.remove();
    refArtifact.textAlert = null;
  }

  const textAlert = document.createElement("p");
  textAlert.textContent = text;

  textAlert.classList.add(
    type == 1 ? "passInLibrary" : "failedInLibrary",
    "justify-Content-center",
    "centerFloat",
    "pr-1",
    "pl-1"
  );
  textAlert.style.fontSize = size + "px";
  document.querySelector("#" + id).appendChild(textAlert);
  refArtifact.textAlert = textAlert;
}
//compara dos valores position  con cierta olgura
function gInterPoint(value, compare, noise = 0.1) {

  if (
    (typeof value== "number" && typeof compare== "number") &&
    parseFloat(value.toFixed(2)) <= parseFloat(compare.toFixed(2)) + noise &&
    parseFloat(value.toFixed(2)) >= parseFloat(compare.toFixed(2)) - noise
  ) {
    return true;
  } else {
    return false;
  }
}

function gFuntionDefault(n, m, c) {
  console.log("************ Default *************");
  console.log(n);
  console.log(m);
  console.log(c);
}
//agrega un boton activo a la definicion ademas del toggle visual
function gButtonToggle(
  p = {},
  params = {
    toggleResect: true,
    option: true,
    buttonActive: "buttonActive",
    ...p,
  }
) {
  if (params.def[params.buttonActive] != params.button) {
    if (params.def[params.buttonActive] != null) {
      params.def[params.buttonActive].classList.toggle("buttonDownActive");
    }
    params.def.mode = params.mode;
    console.log(params.mode);
    params.def[params.buttonActive] = params.button;
    if (params.option) {
      params.def[params.buttonActive].classList.toggle("buttonDownActive");
    }
  } else {
    params.def[params.buttonActive].classList.toggle("buttonDownActive");
    if (params.toggleResect) {
      params.def.mode = null;
      params.def[params.buttonActive] = null;
    }
  }
}
function gModalView(params = {}) {}

//funcion revursiva recorre todo el objeto y sus hijos para retornar un elemento html completo
function gRecurcibeObjectHtml(iteration) {
  const element = document.createElement(iteration.type || "div");
  gSetAttributeDivs(element, iteration);
  if (iteration.chields != undefined) {
    for (divIter of Object.values(iteration.chields)) {
      element.appendChild(gRecurcibeObjectHtml(divIter));
    }
  }
  return element;
}
//setea los valores id, clases,data set del elemento
function gSetAttributeDivs(element, att) {
  if (att.id) {
    element.setAttribute("id", att.id);
  }

  if (att.attributes) {
    for (const p of Object.keys(att.attributes)) {
      element.setAttribute(p, att.attributes[p]);
    }
  }

  if (att.class) {
    element.className =
      att.class +
      `${att.type == "button" ? " button-marg buttonKey" : ""} 
		${
      att.dataSet && -1 != att.dataSet.findIndex((e) => e[0] === "text")
        ? "buttonText"
        : ""
    }
		${
      att.dataSet && -1 != att.dataSet.findIndex((e) => e[0] === "tool")
        ? "buttonTool"
        : ""
    }`;
  }
  if (att.title) {
    element.setAttribute("title", att.title);
  }
  if (att.dataSet) {
    att.dataSet.forEach((data) => {
      element.setAttribute("data-" + data[0], data[1]);
    });
  }
  if (att.styles) {
    element.style = att.styles;
  }
  if (att.value) {
    element.value = att.value;
  }
  element.textContent = att.content;
}

function gMakeModal(params) {
  const modalTmp = `
   <div id="myModal" class="modal">
      <!-- Modal content -->
      <div class="modal-content">
          <div class="top-bar" >
            <buttom class="closed close buttonAux"></buttom>
            <H3 id="title-modal">modal default</H3> 
         </div >
         <p id="text-modal">Alcaravan</p>
      </div >
   </div > `;

  document.body.insertAdjacentHTML("afterend", modalTmp);
  const modal = document.getElementById("myModal");
  modal.addEventListener("click", (e) => {
    if (e.target.classList.contains("close")) {
      (() => (modal.style.display = "none"))();
    }
  });
  window.onclick = function (e) {
    if (e.target == modal) {
      modal.style.display = "none";
    }
  };
  return modal;
}

function gSetModal(params) {
  const modal = document.getElementById("myModal");
  modal.style.display = "block";
  const style = {
    title: "titulo default",
    text: "default vacio",
    ...params,
  };
  modal.querySelector("#title-modal").textContent = style.title;
  modal.querySelector("#text-modal").textContent = style.text;
}
