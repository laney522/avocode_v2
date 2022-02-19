export const initialState = {
  mainPosts: [{
    id: 1,
    User: {
      id: 1,
      nickname: '레니',
    },
    content: '첫 번째 게시글 #해시태그 #익스프레스',
    Images: [{
      src: 'https://cdn.pixabay.com/photo/2022/02/01/11/48/woman-6986050_960_720.jpg',
    }, {
      src: 'https://cdn.pixabay.com/photo/2019/03/27/15/24/animal-4085255__340.jpg',
    }, {
      src: 'https://cdn.pixabay.com/photo/2022/02/09/20/52/labrador-retriever-7004193__340.jpg',
    }],
    Comments: [{
      User: {
        nickname: 'nero',
      },
      content: '개정판이 나왔군요!',
    }, {
      User: {
        nickname: 'hero',
      },
      content: '얼른 사고싶어요',
    }]
  }],
  imagePaths: [],
  postAdded: false,
}

const ADD_POST = 'ADD_POST';
export const addPost = {
  type: ADD_POST,
}
const dummyPost = {
  id: 2,
  content: '더미데이터입니다.',
  User: {
    id: 1,
    nickname: '제로초',
  },
  Images: [],
  Comments: [],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
        postAdded: true,
      }
    default:
      return state;
  }
};

export default reducer;