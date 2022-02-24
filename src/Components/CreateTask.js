import React, { useState } from "react";

const CreateTask = ({ handleCreateTask }) => {
  const [state, setState] = useState("");
  const [show, setShow] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;
    console.log(value);
    setState(value);
  };

  const handleModalClose = (e) => {
    const currentClass = e.target.className;

    if (currentClass === "modal-card") {
      return;
    }

    setShow(false);
  };

  const handleModalOpen = () => {
    setShow(true);
  };

  return (
    <div>
      <div hidden={!show}>
        <div className="modal-background">
          <div id="contenedor-card" className="modal-card padding-8px">
            <div className="align-right father">
              <label
                className="margin-bottom margin-top-50 close-field close-button"
                onClick={handleModalClose}
              ></label>
            </div>

            <div id="contenedor">
              <div className="font-face-body ">
                <label>Agregar Tarea</label>
              </div>

              <div id="contenedor">
                <div className="align-left father">
                  <label className="align-right margin-right  margin-top-90 padding-top">
                    Nombre de la tarea
                    <input
                      className="input-width"
                      value={state}
                      placeholder="Escribe tu correo electronico"
                      onChange={handleChange}
                    />
                    <div className="align-right father">
                      <label className="align-right margin-right">0/50</label>
                    </div>
                  </label>
                </div>
              </div>

              <div id="contenedor" className="margin-top-90">
                <div className="align-left father">
                  <label className="padding-8px margin-top-90 padding-top">
                    Descripción
                    <textarea
                      className="input-width"
                      value={state}
                      placeholder="Escribe tu correo electronico"
                      onChange={handleChange}
                    />
                    <div className="align-right father">
                      <label className="align-right margin-right">0/150</label>
                    </div>
                  </label>
                </div>
              </div>
              <div id="contenedor" className="margin-top-110">
                <div className="align-left father">
                  <button
                    className=" modal-button son margin-top"
                    onClick={handleModalOpen}
                  >
                    Cancelar
                  </button>
                </div>
                <div className="align-right father">
                  <button
                    className=" modal-button son margin-right"
                    onClick={handleModalOpen}
                  >
                    Guardar cambios
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="contenedor">
        <div className="align-left father">
          <h1 className="font-face-titulo align-left son">Tareas</h1>
        </div>
        <div className="font-face-body align-right father">
          <input
            className="font-face-body search-field son"
            value={state}
            placeholder="Buscar tarea"
            onChange={handleChange}
          />

          <button
            className="font-face-body modal-button plus-field son"
            onClick={handleModalOpen}
          >
            Crear nueva tarea
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateTask;
