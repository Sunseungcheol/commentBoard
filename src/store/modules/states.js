//수정인지 아닌지.
const EDIT = "state/EDIT";
const EDIT_SUCCESS = "state/EDIT_SUCCESS";

const PASSWORD = "state/PASSWORD";

const initialState = {
  onEdit: false,
  id: 0,
  pw: "",
};

export const edit = (id, pw) => ({ type: EDIT, id, pw });
export const savePw = (pw) => ({ type: PASSWORD, pw });

function states(state = initialState, action) {
  switch (action.type) {
    case EDIT:
      return {
        onEdit: true,
        id: action.id,
        pw: action.pw,
      };
    case EDIT_SUCCESS:
      return {
        onEdit: false,
        id: 0,
      };
    case PASSWORD:
      return {
        pw: action.pw,
      };
    default:
      return state;
  }
}

export default states;
