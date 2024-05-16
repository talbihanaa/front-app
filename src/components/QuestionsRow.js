

import React from 'react';
import ReactDOM from 'react-dom';
import { Avatar, Form, Button, List, Input, Typography, Collapse } from 'antd';
import { 
  HeartOutlined, HeartFilled, 
  StarOutlined, StarFilled, 
  FrownOutlined, FrownFilled, 
  LikeOutlined, LikeFilled 
} from '@ant-design/icons';
import moment from 'moment';

const { TextArea } = Input;
const { Text } = Typography;
const { Panel } = Collapse;

class Editor extends React.Component {
  render() {
    const { onTitleChange, onContentChange, onSubmit, submitting, title, content } = this.props;
    return (
      <div style={{ width: '100%', maxWidth: '600px', margin: '0 auto', padding: '20px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <Form.Item>
          <Input onChange={onTitleChange} value={title} placeholder="Title" />
        </Form.Item>
        <Form.Item>
          <TextArea rows={4} onChange={onContentChange} value={content} placeholder="Add a comment" />
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
            Add Comment
          </Button>
        </Form.Item>
      </div>
    );
  }
}

class CommentList extends React.Component {
  render() {
    const { comments, onLike, onFavorite, onEnColere, onJaime, onReply } = this.props;
    return (
      <List
        dataSource={comments}
        header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
        itemLayout="horizontal"
        renderItem={(comment, index) => (
          <CustomComment
            key={index}
            index={index}
            author={comment.author}
            avatar={comment.avatar}
            content={comment.content}
            datetime={comment.datetime}
            likes={comment.likes}
            favorites={comment.favorites}
            enColere={comment.enColere}
            jaime={comment.jaime}
            replies={comment.replies}
            onLike={onLike}
            onFavorite={onFavorite}
            onEnColere={onEnColere}
            onJaime={onJaime}
            onReply={onReply}
          />
        )}
      />
    );
  }
}

class CustomComment extends React.Component {
  state = {
    replyVisible: false,
    replyContent: ''
  };

  handleReplyClick = () => {
    this.setState({ replyVisible: !this.state.replyVisible });
  };

  handleReplyChange = e => {
    this.setState({ replyContent: e.target.value });
  };

  handleReplySubmit = () => {
    const { onReply, index } = this.props;
    onReply(index, this.state.replyContent);
    this.setState({ replyVisible: false, replyContent: '' });
  };

  render() {
    const { author, avatar, content, datetime, likes, favorites, enColere, jaime, replies, onLike, onFavorite, onEnColere, onJaime } = this.props;
    const { replyVisible, replyContent } = this.state;

    return (
      <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '16px', width: '100%', padding: '10px', backgroundColor: '#f9f9f9', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
        <div style={{ display: 'flex' }}>
          <Avatar src={avatar} alt={author} />
          <div style={{ marginLeft: '16px', flex: 1 }}>
            <Text strong style={{ color: 'black' }}>{author}</Text>
            <div style={{ color: 'black' }}>{content}</div>
            <Text type="secondary" style={{ color: 'black' }}>{datetime}</Text>
            <div style={{ display: 'flex', alignItems: 'center', marginTop: '8px' }}>
              <Button type="link" onClick={onLike} style={{ display: 'flex', alignItems: 'center', padding: 0 }}>
                {likes > 0 ? <HeartFilled style={{ color: 'red', marginRight: '8px' }} /> : <HeartOutlined style={{ color: 'red', marginRight: '8px' }} />}
              </Button>
              <Text style={{ color: 'black', marginRight: '16px' }}>{likes} {likes === 1 ? 'Like' : 'Likes'}</Text>

              <Button type="link" onClick={onFavorite} style={{ display: 'flex', alignItems: 'center', padding: 0 }}>
                {favorites > 0 ? <StarFilled style={{ color: 'gold', marginRight: '8px' }} /> : <StarOutlined style={{ color: 'gold', marginRight: '8px' }} />}
              </Button>
              <Text style={{ color: 'black', marginRight: '16px' }}>{favorites} {favorites === 1 ? 'Favorite' : 'Favorites'}</Text>

              <Button type="link" onClick={onEnColere} style={{ display: 'flex', alignItems: 'center', padding: 0 }}>
                {enColere > 0 ? <FrownFilled style={{ color: 'brown', marginRight: '8px' }} /> : <FrownOutlined style={{ color: 'brown', marginRight: '8px' }} />}
              </Button>
              <Text style={{ color: 'black', marginRight: '16px' }}>{enColere} {enColere === 1 ? 'En Colère' : 'En Colère'}</Text>

              <Button type="link" onClick={onJaime} style={{ display: 'flex', alignItems: 'center', padding: 0 }}>
                {jaime > 0 ? <LikeFilled style={{ color: 'blue', marginRight: '8px' }} /> : <LikeOutlined style={{ color: 'blue', marginRight: '8px' }} />}
              </Button>
              <Text style={{ color: 'black', marginRight: '16px' }}>{jaime} {jaime === 1 ? "J'aime" : "J'aime"}</Text>
            </div>
            <Button type="link" onClick={this.handleReplyClick} style={{ marginTop: '8px' }}>Reply</Button>
          </div>
        </div>

        {replyVisible && (
          <div style={{ marginTop: '16px', marginLeft: '56px', width: '100%' }}>
            <TextArea rows={2} onChange={this.handleReplyChange} value={replyContent} placeholder="Add a reply" />
            <Button htmlType="submit" onClick={this.handleReplySubmit} type="primary" style={{ marginTop: '8px' }}>
              Reply
            </
            Button>
          </div>
        )}

        {replies && replies.length > 0 && (
          <div style={{ marginTop: '16px', marginLeft: '56px' }}>
            <CommentList 
              comments={replies} 
              onLike={this.props.onLike} 
              onFavorite={this.props.onFavorite}
              onEnColere={this.props.onEnColere}
              onJaime={this.props.onJaime}
              onReply={this.props.onReply}
            />
          </div>
        )}
      </div>
    );
  }
}

class QuestionRow extends React.Component {
  state = {
    title: '',
    comments: [],
    submitting: false,
    content: '',
  };

  handleTitleChange = e => {
    this.setState({
      title: e.target.value,
    });
  };

  handleSubmit = () => {
    const { title, content } = this.state;
    if (!content || !title) {
      return;
    }

    this.setState({
      submitting: true,
    });

    setTimeout(() => {
      this.setState({
        submitting: false,
        content: '',
        title: '',
        comments: [
          {
            author: 'Han Solo',
            avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            content: <p>{content}</p>,
            datetime: moment().fromNow(),
            likes: 0,
            favorites: 0,
            enColere: 0,
            jaime: 0,
            replies: [],
          },
          ...this.state.comments,
        ],
      });
    }, 1000);
  };

  handleContentChange = e => {
    this.setState({
      content: e.target.value,
    });
  };

  handleLike = index => {
    const newComments = [...this.state.comments];
    newComments[index].likes += 1;
    this.setState({ comments: newComments });
  };

  handleFavorite = index => {
    const newComments = [...this.state.comments];
    newComments[index].favorites += 1;
    this.setState({ comments: newComments });
  };

  handleEnColere = index => {
    const newComments = [...this.state.comments];
    newComments[index].enColere += 1;
    this.setState({ comments: newComments });
  };

  handleJaime = index => {
    const newComments = [...this.state.comments];
    newComments[index].jaime += 1;
    this.setState({ comments: newComments });
  };

  handleReply = (index, replyContent) => {
    const newComments = [...this.state.comments];
    newComments[index].replies.push({
      author: 'User', 
      avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png', 
      content: <p>{replyContent}</p>,
      datetime: moment().fromNow(),
      likes: 0,
      favorites: 0,
      enColere: 0,
      jaime: 0,
    });
    this.setState({ comments: newComments });
  };

  render() {
    const { comments, submitting, content, title } = this.state;

    return (
      <div style={{ width: '100%', maxWidth: '600px', margin: '0 auto', padding: '20px', backgroundColor: '#333', borderRadius: '8px' }}>
        <Editor
          onTitleChange={this.handleTitleChange}
          onContentChange={this.handleContentChange}
          onSubmit={this.handleSubmit}
          submitting={submitting}
          title={title}
          content={content}
        />
        <Collapse accordion>
          {comments.map((comment, index) => (
            <Panel header={<Text strong style={{ color: 'white', fontSize: '16px' }}>{comment.author}</Text>} key={index} style={{ backgroundColor: '#444', borderRadius: '8px', marginBottom: '10px' }}>
              <CommentList 
                comments={[comment]} 
                onLike={() => this.handleLike(index)} 
                onFavorite={() => this.handleFavorite(index)}
                onEnColere={() => this.handleEnColere(index)}
                onJaime={() => this.handleJaime(index)}
                onReply={(replyIndex, replyContent) => this.handleReply(index, replyContent)}
              />
            </Panel>
          ))}
        </Collapse>
      </div>
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const mountNode = document.getElementById('mountNode');
  ReactDOM.render(<QuestionRow />, mountNode);
});

export default QuestionRow;
