import React from "react";
import Stats from "./components/Stats";
import CountrySelector from "./components/CountrySelector";
import Chart from "./components/Chart";
import NavBar from "./components/NavBar";
import "./App.css";

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <div className="container">
        <div>
          <h2>Nel Mondo</h2>

          <Stats url="https://covid19.mathdro.id/api"></Stats>
          <button
            type="button"
            className="btn btn-primary"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            Show Info
          </button>
        </div>
        <CountrySelector className="my-5"></CountrySelector>
        <div
          className="modal fade bd-example-modal-xl"
          id="exampleModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div
            className="modal-dialog modal-dialog-centered  modal-xl"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Info Situazione nel Mondo
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <Chart url="https://covid19.mathdro.id/api/daily"></Chart>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Chiudi
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
