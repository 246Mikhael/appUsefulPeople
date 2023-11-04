import { connect } from "react-redux";
import Buttons from "../components/mainPanelComponents/Buttons";



const mapStateToProps = (state)=>{
  return ({
    visible: state.addField.visibleAddUsefulManButton,
     visibleInputCategory : state.addField.visibleCategoryInput,
     visibleCategoryPanel:state.addField.visibleCategoryPanel,
  })
};

const mapDispatchToProps = (dispatch) => {
    return({
        showInputs: ()=> dispatch({type: "ADD_FIELD"}),
        hideAddUsefulManButton: ()=> dispatch({type: 'CHANGE_VISIBILITY'}),
    })
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Buttons)