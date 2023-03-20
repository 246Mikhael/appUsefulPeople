import { connect } from "react-redux";
import Categories from "../components/categoriesComponents/Categories";
import { removeCateg } from "../actions/actions";
import { deleteMan } from "../actions/actions";
import { setEditManId } from "../actions/actions";
import { editMan }  from "../actions/actions";
import { addData } from "../actions/actions";



const mapStateToProps = (state)=>{
    return ({
    people: state.addField.usefulPeople,
    visibleCategoryPanel:state.addField.visibleCategoryPanel,
    editingManId: state.addField.manIdEditMode
    })
}

const mapDispatchToProps = (dispatch)=>{
   return ({
     removeCategory: (item) => dispatch(removeCateg(item)),
     toggleVisibleCategoriesPanel: () => dispatch({type:'PANEL_CATEGORIES_VISIBILITY'}),
     hideAddUsefulManButton: ()=> dispatch({type: 'CHANGE_VISIBILITY'}),
     delMan: (params) =>  dispatch(deleteMan(params)),
     setEditingManId:(id) => dispatch(setEditManId(id)),
     saveEditMan:(item) => dispatch(editMan(item)),
     sendHandler: (dataOfMan) => dispatch(addData(dataOfMan))
   })
}

export default connect(
   mapStateToProps,
   mapDispatchToProps)(Categories)