/**
 * Default Types
 */
export const Types = {
  TYPE_USER: '@user/AUTHENTICATED_USER',
  USER_AUTH: '@user/USER_AUTH',
  CHALLENGES: '@user/CHALLENGES',
  CARTEIRA: '@user/CARTEIRA',
};

/**
* Default values
*/
const INITIAL_STATE = {
  typeUser: '',
  user:{
    role:''
  },
  challenges:[],
  carteira:{}
};

/**
* Creating Reducers
*/
export default function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.USER_AUTH:
      return { ...state, user: action.user };
    case Types.TYPE_USER:
        return { ...state, typeUser: action.typeUser };
    case Types.CHALLENGES:
      return {...state, challenges: action.challenges };
    case Types.CARTEIRA:
    return {...state, carteira: action.carteira };
    default:
        return state;
  }
}

/**
* Creating actions
*/
export const Creators = {

  addTypeUser: (typeUser) => ({
      type: Types.TYPE_USER,
      typeUser
  }),
  addUserAction: (user) => ({
    type: Types.USER_AUTH,
    user
  }),
  addChallenge: (challenges) => ({
    type: Types.CHALLENGES,
    challenges
  }),
  addCarteira: (carteira) => ({
    type: Types.CARTEIRA,
    carteira
  }),
};