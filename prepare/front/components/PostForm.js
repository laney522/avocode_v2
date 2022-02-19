import React, { useCallback, useRef, useState } from 'react';
import { Form, Input, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { addPost } from '../reducers/post';

const PostForm = () => {
  const { imagePaths } = useSelector((state) => state.post);
  const imageInput = useRef();              // Ref : 실제 Dom에 접근하기 위해서 ref를 쓴다.
  const dispatch = useDispatch();
  const {text, setText} = useState('');
  const onChangeText = useCallback((e) => {
    setText(e.target.value);
  }, []);
  const onSubmit = useCallback(() => {
    dispatch(addPost);
    setText('');
  }, []);
  const onClickImageUpload = useCallback(() => {
    imageInput.current.click();
  }, [imageInput.current]);

  return (
    <Form style={{ margin: '10px 0 20px' }} encType="multipart/form-data" onFinish={onSubmit}>
      <Input.TextArea 
        value={text}
        onChange={onChangeText}
        maxLength={140}
        placeholder='What happen?'
      />
      <div>
        <Input type="file" multiple hidden ref={imageInput}/>
        <Button onClick={onClickImageUpload}>이미지 업로드</Button>
        <Button type="primary" style={{ float: 'right' }} htmlType="submit">Chirping</Button>
      </div>
      <div>
        {imagePaths.map((v) => (
          <div key={v} style={{ display: 'inline-block' }}>
            <img src={v} style={{ width: '200px' }} alt={v} />
            <div>
              <Button>제거</Button>
            </div>        
          </div>
        ))}
      </div>
    </Form>
  )
};

export default PostForm;