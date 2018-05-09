import React from "react";
import Error from "./Error";
import "./styles/modal.css";

var json = require('./data/data.json');

const Modal = ({ match, history }) => {
  console.log("opened a modal")
  const modal = json.find(p => p.id == match.params.id);
  if (!modal) {
    return (
      <div>
        <Error />
      </div>
    );
  }

 const back = e => {
    e.stopPropagation();
    history.goBack();
    console.log("closed a modal")
  };

  Modal.onkeydown = function esckey(evt) {
    evt = window.event;
    if (evt.keyCode == 27) {
      alert('Esfsrrc key fam');
    }
  };

return (
    <div >
    <div className="modal " ><ModalScroll/>
      <div id="modal-content-animation" className="modal-content animated fadeIn" >
        <button className="backLink close" type="button" onClick={back} >
            Close
        </button>
        <h1 className="modal-content-head" >{modal.first_name} {modal.last_name}</h1>
        <h2>{modal.first_name} {modal.last_name}</h2>
          <hr/>
          <ul>
            <li>P360: <span>{modal.p360}</span></li>
            <li>Average P360: <span>{modal.average_p360}</span></li>
            <li>Surrender Conservation: <span>{modal.surrender_conservation}</span></li>
            <li>Total Clients Service: <span>{modal.total_client_served}</span></li>
            <li>Average Clients Served: <span>{modal.average_clients_served}</span></li>
            <li># of Email Indemnity: <span>{modal.num_email_indemnity}</span></li>
            <li>% of Email & Indemnity: <span>{modal.per_email_indemnity}</span></li>
            <li># Client Web Registration: <span>{modal.num_web}</span></li>
            <li>% of Client Web Registration: <span>{modal.per_web}</span></li>
            <li># Proof of Address: <span>{modal.num_poa}</span></li>
            <li>% of Proof of Address: <span>{modal.per_poa}</span></li>
            <li>C.S.I.: <span>{modal.csi}</span></li>
            <li>% ECRIS Quality Log: <span>{modal.ECRISQLog}</span></li>
            <li>Number of days works: <span>{modal.num_work}</span></li>
            <li>Number of days logged to Qlogik/Ecris: <span>{modal.num_days_logged}</span></li>
            <li>Training Hours: <span>{modal.t_Hours}</span></li>
            <li>Complete All Mandatory Training: <span>{modal.n_training}</span></li>
            <li>NPS: <span>{modal.nnps}</span></li>
            <li>% Waiting Time: <span>{modal.wait}</span></li>
          </ul>      
          <p>{modal.content}</p>
        </div>
      </div>
    </div>
  );
};

class ModalScroll extends React.Component {
 componentDidMount(){
   document.body.classList.add('noscroll');
 }
 componentWillUnmount(){
   document.body.classList.remove('noscroll');
 }
  render() {
  return <div></div>;
  }
}

export default Modal;

