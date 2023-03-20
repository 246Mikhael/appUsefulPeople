import { connect } from 'react-redux'
import { addData } from '../actions/actions';
import FillingForm from '../components/inputNewManComponents/FillingForm';


const mapStateToProps = (state) =>{
   return ({ 
      visibleInputs: state.addField.visibleInputs,
      store: state.addField
   })
}

const mapDispatchToProps = (dispatch) =>{
   return ({
   sendHandler: (dataOfMan) => dispatch(addData(dataOfMan)),
   hideInputs: ()=> dispatch({type: "ADD_FIELD"}),
   showAddUsefulManButton: ()=> dispatch({type: 'CHANGE_VISIBILITY'}) 
   })
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FillingForm)
