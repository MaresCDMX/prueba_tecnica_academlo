import React, { useState } from "react";

const CreateTask = ({ handleCreateTask }) => {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const [find, setFind] = useState("");
  const [show, setShow] = useState(false);

  const handleChangeTask = (e) => {
    const value = e.target.value;
    console.log(value);
    setTask(value);
  };

  const handleChangeDescription = (e) => {
    const value = e.target.value;
    console.log(value);
    setDescription(value);
  };

  const handleChangeFind = (e) => {
    const value = e.target.value;
    console.log(value);
    setFind(value);
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
              <div className="font-face-subtitulo ">
                <label>Agregar Tarea</label>
              </div>

              <div id="contenedor">
                <div className=" align-left father">
                  <label className="font-face-form align-right margin-right  margin-top-90 padding-top">
                    Nombre de la tarea
                    <input
                      className="font-face-form input-width"
                      value={task}
                      placeholder="Escribe tu correo electronico"
                      onChange={handleChangeTask}
                    />
                    <div className="align-right father">
                      <label className="font-face-form align-right margin-right">
                        0/50
                      </label>
                    </div>
                  </label>
                </div>
              </div>

              <div id="contenedor" className="margin-top-90">
                <div className="align-left father">
                  <label className="font-face-form padding-8px margin-top-90 padding-top">
                    Descripción
                    <textarea
                      className="font-face-form input-width"
                      value={description}
                      placeholder="Escribe tu correo electronico"
                      onChange={handleChangeDescription}
                    />
                    <div className="align-right father">
                      <label className="font-face-form align-right margin-right">
                        0/150
                      </label>
                    </div>
                  </label>
                </div>
              </div>
              <div id="contenedor" className="margin-top-40">
                <div className="align-left father">
                  <button
                    className="modal-button button-cancel son margin-top"
                    onClick={handleModalOpen}
                  >
                    &nbsp; &nbsp; &nbsp; Cancelar &nbsp; &nbsp; &nbsp;
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
            value={find}
            placeholder="Buscar tarea"
            onChange={handleChangeFind}
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
