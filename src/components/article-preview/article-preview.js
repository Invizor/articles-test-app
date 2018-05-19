import React from 'react';
import PropTypes from 'prop-types';
import './article-preview.less';

const initialArticle = {
	title: '',
	description: '',
	comments: []
};

export default class ArticlePreview extends React.Component {
	constructor(props) {
		super(props);
		let selectArticle = this.selectCurrentArticle(this.props.articles.list);
		this.state = {
			article: selectArticle ?  selectArticle : initialArticle,
			commentText: ''
		}
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.articles !== this.props.articles) {
			let selectArticle = this.selectCurrentArticle(nextProps.articles.list);
			this.setState({
				article: selectArticle ?  selectArticle : initialArticle
			})
		}
	}

	selectCurrentArticle(list) {
		let articleSelect = null;
		list.forEach(article => {
			if(String(article.id) === this.props.match.params.id) {
				articleSelect = article;
			}
		});
		return articleSelect;
	}

	sendComment = () => {
		if(typeof(this.state.commentText) === 'string' && this.state.commentText.length > 0) {
			let resultArticle = this.state.article;
			resultArticle.comments.push(this.state.commentText);
			this.props.updateArticle(resultArticle);
			this.setState({
				commentText: ''
			});
		}
	};

	onChangeTextComment = (event) => {
		this.setState({
			commentText: event.target.value
		})
	};

	renderComments() {
		return (
			<div className="comments">
				<div className="title-comments">
					Комментарии
				</div>
				<div className="comments-list">
					{
						this.state.article.comments.map((commentString, index) => {
							return (
								<div key={index} className="comment">
									<div className="content">
										{commentString}
									</div>
								</div>
							);
						})
					}
				</div>
				<div className="block-add-comment">
					<textarea
						className="comment-area"
						value={this.state.commentText}
						onChange={(e) => this.onChangeTextComment(e)}
					/>
					<button className="add-btn" onClick={this.sendComment}>
						Добавить
					</button>
				</div>
			</div>
		);
	}

	componentDidMount() {
	}

	render() {
		return (
			<div className="article-view">
				<div className="title">
					{this.state.article.title}
				</div>
				<div className="description">
					{this.state.article.description}
				</div>
				{this.renderComments()}
			</div>
		);
	}
}

ArticlePreview.propTypes = {
	updateArticle: PropTypes.func,
	articles: PropTypes.shape({
		status: PropTypes.string,
		list: PropTypes.arrayOf(PropTypes.object)
	})
};