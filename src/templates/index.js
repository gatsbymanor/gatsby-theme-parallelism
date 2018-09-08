import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import cx from 'classnames';

import full01 from '../images/fulls/01.jpg'
import full02 from '../images/fulls/02.jpg'
import full03 from '../images/fulls/03.jpg'
import full04 from '../images/fulls/04.jpg'
import full05 from '../images/fulls/05.jpg'
import full06 from '../images/fulls/06.jpg'
import full07 from '../images/fulls/07.jpg'
import full08 from '../images/fulls/08.jpg'

import thumb01 from '../images/thumbs/01.jpg'
import thumb02 from '../images/thumbs/02.jpg'
import thumb03 from '../images/thumbs/03.jpg'
import thumb04 from '../images/thumbs/04.jpg'
import thumb05 from '../images/thumbs/05.jpg'
import thumb06 from '../images/thumbs/06.jpg'
import thumb07 from '../images/thumbs/07.jpg'
import thumb08 from '../images/thumbs/08.jpg'

import '../sass/main.scss'


class IndexPage extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      popupVisible: false,
      currentImageFullSrc: '',
      currentImageCaption: '',
    }

    this.images = [
      {
        full: full01,
        thumb: thumb01,
      },
      {
        full: full02,
        thumb: thumb02,
      },
      {
        full: full03,
        thumb: thumb03,
      },
      {
        full: full04,
        thumb: thumb04,
      },
      {
        full: full05,
        thumb: thumb05,
      },
      {
        full: full06,
        thumb: thumb06,
      },
      {
        full: full07,
        thumb: thumb07,
      },
      {
        full: full08,
        thumb: thumb08,
      },
    ]

  }

  // componentDidMount() {
  //   // document.body.classList.add("is-poptrox-visible")
  // }

  updateBodyClass = (popupVisible) => {

    if (popupVisible) {
      document.body.classList.add("is-poptrox-visible")
    } else {
      document.body.classList.remove("is-poptrox-visible")
    }

  }

  // TODO(nodox): This code is not the REACT WAY. Help make it less hacky.
  handleItemClick = (e) => {
    e.stopPropagation()

    // TODO: needs refactor. Made as a hack in the interest of time
    const title = e.target.parentElement.parentElement.querySelector(".poptrox-image-caption").innerHTML

    let popupVisible = !this.state.popupVisible
    this.setState({
      popupVisible: popupVisible,
      currentImageFullSrc: e.target.src,
      currentImageCaption: title,
    })

    this.updateBodyClass(popupVisible)
  }

  hidePopup = (e) => {
    e.stopPropagation()
    let popupVisible = this.state.popupVisible


    if (popupVisible) {
      this.setState({ popupVisible: false })
      this.updateBodyClass(false)
    }

  }

  // TODO(nodox): needs to be implemented
  handleNextClick = (e) => {
    e.stopPropagation()
    console.log("Clicked next button");
  }

  // TODO(nodox): needs to be implemented
  handlePreviousClick = (e) => {
    e.stopPropagation()
    console.log("Clicked previous button");
  }

  render() {


    let popupOverlayClass = cx({
      "poptrox-overlay": this.state.popupVisible,
      "none": !this.state.popupVisible,
    });

    let popupClass = cx({
      "poptrox-popup": this.state.popupVisible,
      "none": !this.state.popupVisible,
    });

    return (
      <Layout>
    			<div id="wrapper">

    					<section id="main">

    							<div className="items">

    								<div className="item intro span-2">
    									<h1>Parallelism</h1>
    									<p>A responsive portfolio site<br />
    									template by HTML5 UP</p>
    								</div>

                    <article className="item thumb span-1" onClick={this.handleItemClick}>
    									<h2 className="poptrox-image-caption">You really got me</h2>
    									<span className="image">
                        <img src={thumb01} alt="" />
                        <img className="poptrox-full-image none" src={full01} alt="" />
                      </span>
    								</article>

    								<article className="item thumb span-2" onClick={this.handleItemClick}>
    									<h2 className="poptrox-image-caption">Ad Infinitum</h2>
    									<span className="image">
                        <img src={thumb02} alt="" />
                        <img className="poptrox-full-image none" src={full02} alt="" />
                      </span>
    								</article>

    								<article className="item thumb span-1" onClick={this.handleItemClick}>
    									<h2 className="poptrox-image-caption">Different.</h2>
    									<span className="image">
                        <img src={thumb03} alt="" />
                        <img className="poptrox-full-image none" src={full03} alt="" />
                      </span>
    								</article>

    								<article className="item thumb span-1" onClick={this.handleItemClick}>
    									<h2 className="poptrox-image-caption">Elysium</h2>
    									<span className="image">
                        <img src={thumb04} alt="" />
                        <img className="poptrox-full-image none" src={full04} alt="" />
                      </span>
    								</article>

    								<article className="item thumb span-3" onClick={this.handleItemClick}>
    									<h2 className="poptrox-image-caption">Kingdom of the Wind</h2>
    									<span className="image">
                        <img src={thumb05} alt="" />
                        <img className="poptrox-full-image none" src={full05} alt="" />
                      </span>
    								</article>

    								<article className="item thumb span-1" onClick={this.handleItemClick}>
    									<h2 className="poptrox-image-caption">The Pursuit</h2>
    									<span className="image">
                        <img src={thumb06} alt="" />
                        <img className="poptrox-full-image none" src={full06} alt="" />
                      </span>
    								</article>

    								<article className="item thumb span-2" onClick={this.handleItemClick}>
    									<h2 className="poptrox-image-caption">Boundless</h2>
    									<span className="image">
                        <img src={thumb07} alt="" />
                        <img className="poptrox-full-image none" src={full07} alt="" />
                      </span>
    								</article>

    								<article className="item thumb span-2" onClick={this.handleItemClick}>
    									<h2 className="poptrox-image-caption">The Spectators</h2>
    									<span className="image">
                        <img src={thumb08} alt="" />
                        <img className="poptrox-full-image none" src={full08} alt="" />
                      </span>
    								</article>

    							</div>

    						{/* <!-- Items --> */}
    							<div className="items">

    								<article className="item thumb span-3" onClick={this.handleItemClick}>
                      <h2 className="poptrox-image-caption">Kingdom of the Wind</h2>
                      <span className="image">
                        <img src={thumb05} alt="" />
                        <img className="poptrox-full-image none" src={full05} alt="" />
                      </span>
                    </article>

                    <article className="item thumb span-1" onClick={this.handleItemClick}>
                      <h2 className="poptrox-image-caption">The Pursuit</h2>
                      <span className="image">
                        <img src={thumb06} alt="" />
                        <img className="poptrox-full-image none" src={full06} alt="" />
                      </span>
                    </article>

                    <article className="item thumb span-2" onClick={this.handleItemClick}>
                      <h2 className="poptrox-image-caption">Boundless</h2>
                      <span className="image">
                        <img src={thumb07} alt="" />
                        <img className="poptrox-full-image none" src={full07} alt="" />
                      </span>
                    </article>

                    <article className="item thumb span-2" onClick={this.handleItemClick}>
                      <h2 className="poptrox-image-caption">The Spectators</h2>
                      <span className="image">
                        <img src={thumb08} alt="" />
                        <img className="poptrox-full-image none" src={full08} alt="" />
                      </span>
                    </article>

                    <article className="item thumb span-1" onClick={this.handleItemClick}>
                      <h2 className="poptrox-image-caption">You really got me</h2>
                      <span className="image">
                        <img src={thumb01} alt="" />
                        <img className="poptrox-full-image none" src={full01} alt="" />
                      </span>
                    </article>

                    <article className="item thumb span-2" onClick={this.handleItemClick}>
                      <h2 className="poptrox-image-caption">Ad Infinitum</h2>
                      <span className="image">
                        <img src={thumb02} alt="" />
                        <img className="poptrox-full-image none" src={full02} alt="" />
                      </span>
                    </article>

                    <article className="item thumb span-1" onClick={this.handleItemClick}>
                      <h2 className="poptrox-image-caption">Different.</h2>
                      <span className="image">
                        <img src={thumb03} alt="" />
                        <img className="poptrox-full-image none" src={full03} alt="" />
                      </span>
                    </article>

                    <article className="item thumb span-2" onClick={this.handleItemClick}>
                      <h2 className="poptrox-image-caption">Kingdom of the Wind</h2>
                      <span className="image">
                        <img src={thumb05} alt="" />
                        <img className="poptrox-full-image none" src={full05} alt="" />
                      </span>
                    </article>

                    <article className="item thumb span-1" onClick={this.handleItemClick}>
                      <h2 className="poptrox-image-caption">Elysium</h2>
                      <span className="image">
                        <img src={thumb04} alt="" />
                        <img className="poptrox-full-image none" src={full04} alt="" />
                      </span>
                    </article>


    							</div>

    					</section>

    				{/* <!-- Footer --> */}
    					<section id="footer">
    						<section>
    							<p>This is <strong>Parallelism</strong>, a responsive portfolio site template by <a href="http://html5up.net">HTML5 UP</a>. Free for personal
    							and commercial use under the <a href="http://html5up.net/license">Creative Commons Attribution</a> license.</p>
    						</section>
    						<section>
    							<ul className="icons">
    								<li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
    								<li><a href="#" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
    								<li><a href="#" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
    								<li><a href="#" className="icon fa-dribbble"><span className="label">Dribbble</span></a></li>
    								<li><a href="#" className="icon fa-envelope"><span className="label">Email</span></a></li>
    							</ul>
    							<ul className="copyright">
    								<li>
                      &copy; Untitled
                    </li>
                    <li>
                      Design: <a href="http://html5up.net">HTML5 UP</a>
                    </li>
    							</ul>
    						</section>
    					</section>

    			</div>


          <div className={popupOverlayClass} onClick={this.hidePopup}>

            <div className="poptrox-prepend"></div>
            <div className="poptrox-append"></div>

            <div className={popupClass}>
              <div className="pic">
                <img src={this.state.currentImageFullSrc} />
              </div>
              <div className="caption">{this.state.currentImageCaption}</div>

              {/* TODO(nodox): Not supported yet. Implement your own then create PR! */}
              {/* <div className="nav-previous" onClick={this.handlePreviousClick}></div> */}
              {/* <div className="nav-next" onClick={this.handleNextClick}></div> */}
            </div>
          </div>

      </Layout>
    )
  }
}

export default IndexPage
