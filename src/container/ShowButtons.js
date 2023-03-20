import { connect } from "react-redux";
import Buttons from "../components/mainPanelComponents/Buttons";
import { addCateg } from "../actions/actions";



const mapStateToProps = (state)=>{
  return ({
    visible: state.addField.visibleAddUsefulManButton,
     visibleInputCategory : state.addField.visibleCategoryInput
  })
};

const mapDispatchToProps = (dispatch) => {
    return({
        showInputs: ()=> dispatch({type: "ADD_FIELD"}),
        hideAddUsefulManButton: ()=> dispatch({type: 'CHANGE_VISIBILITY'}),
        showInputCategory: ()=> dispatch({type: 'ADD_INPUT'}),
        addCategory: (value)=> dispatch(addCateg(value))
    })
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Buttons)