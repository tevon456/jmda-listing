import React from "react";
import Error from "./Error";
import "./styles/modal.css";

var json = require('./data2.json');

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
    <div className="modal" ><ModalScroll/>
      <div id="modal-content-animation" className="modal-content animated fadeInUp" >
        <button className="backLink close" type="button" onClick={back} >
            Close
        </button>
        <h1 className="modal-content-head" >{modal.first_name} {modal.last_name}</h1>
          <img alt="" src={modal.image} />
          <h3>Description</h3>
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

