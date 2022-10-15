import React, { Component } from 'react'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import Newitems from './Newitems'

export class News extends Component {
static defaultProps={
    country: 'us',
    pageSize: 6,
    category:'general'
}
static propTypes={
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string
}
  constructor(){
     super();
    console.log('inside the constructor');
    this.state={
      articles: [],
      loading: false,
      page: 1,
      totalResults:0
    }
  }
  async componentDidMount()
  {
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data= await fetch(url);
    let udata=await data.json();
    console.log(udata);
    this.setState({articles: udata.articles,totalResults: udata.totalResults,loading:false});
  }
  handlenext=async ()=>{
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4effbc465ada412c9e4b21fbef33a7c2&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data= await fetch(url);
    let udata=await data.json();
    console.log(udata);
    this.setState({articles: udata.articles,page: this.state.page+1,loading:false});
  }
  handleprev=async ()=>{
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4effbc465ada412c9e4b21fbef33a7c2&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data= await fetch(url);
    let udata=await data.json();
    console.log(udata);
    this.setState({articles: udata.articles,page: this.state.page-1,loading:false});
  }
  render() {
    return (
      <div className='container my-2'> 
      <h2>Headlines</h2>
      {this.state.loading &&<Spinner/>}
      <div className="row">
      {!(this.state.loading)&&this.state.articles.map((element)=>{
          return  <div className="col-md-4"  key={element.url} >
          <div className="container my-2">

          <Newitems title={element.title?element.title:""} discription={element.description?element.description:""} img={element.urlToImage?element.urlToImage:"https://s.yimg.com/uu/api/res/1.2/cZ.A44IoP7rBfhktk2mJ4A--~B/aD01NjA7dz04NDA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/la_times_articles_853/ca8d75113f96d9c5ddb5e33780a6da97"} link={element.url}></Newitems>
          </div>
    
          </div>
        })}
      </div> 
      <div className="d-flex justify-content-between">

      <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handleprev}>&larr;Previous</button>   
      <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handlenext}>Next&rarr;</button> 
      </div>
      </div>
    )
  }
}

export default News
