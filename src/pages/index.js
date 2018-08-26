import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
			<div id="wrapper">

					<section id="main">

							<div className="items">

								<div className="item intro span-2">
									<h1>Parallelism</h1>
									<p>A responsive portfolio site<br />
									template by HTML5 UP</p>
								</div>

								<article className="item thumb span-1">
									<h2>You really got me</h2>
									<a href="images/fulls/01.jpg" className="image"><img src="images/thumbs/01.jpg" alt="" /></a>
								</article>

								<article className="item thumb span-2">
									<h2>Ad Infinitum</h2>
									<a href="images/fulls/02.jpg" className="image"><img src="images/thumbs/02.jpg" alt="" /></a>
								</article>

								<article className="item thumb span-1">
									<h2>Different.</h2>
									<a href="images/fulls/03.jpg" className="image"><img src="images/thumbs/03.jpg" alt="" /></a>
								</article>

								<article className="item thumb span-1">
									<h2>Elysium</h2>
									<a href="images/fulls/04.jpg" className="image"><img src="images/thumbs/04.jpg" alt="" /></a>
								</article>

								<article className="item thumb span-3">
									<h2>Kingdom of the Wind</h2>
									<a href="images/fulls/05.jpg" className="image"><img src="images/thumbs/05.jpg" alt="" /></a>
								</article>

								<article className="item thumb span-1">
									<h2>The Pursuit</h2>
									<a href="images/fulls/06.jpg" className="image"><img src="images/thumbs/06.jpg" alt="" /></a>
								</article>

								<article className="item thumb span-2">
									<h2>Boundless</h2>
									<a href="images/fulls/07.jpg" className="image"><img src="images/thumbs/07.jpg" alt="" /></a>
								</article>

								<article className="item thumb span-2">
									<h2>The Spectators</h2>
									<a href="images/fulls/08.jpg" className="image"><img src="images/thumbs/08.jpg" alt="" /></a>
								</article>

							</div>

						{/* <!-- Items --> */}
							<div className="items">

								<article className="item thumb span-3"><h2>Kingdom of the Wind</h2><a href="images/fulls/05.jpg" className="image"><img src="images/thumbs/05.jpg" alt="" /></a></article>
								<article className="item thumb span-1"><h2>The Pursuit</h2><a href="images/fulls/06.jpg" className="image"><img src="images/thumbs/06.jpg" alt="" /></a></article>
								<article className="item thumb span-2"><h2>Boundless</h2><a href="images/fulls/07.jpg" className="image"><img src="images/thumbs/07.jpg" alt="" /></a></article>
								<article className="item thumb span-2"><h2>The Spectators</h2><a href="images/fulls/08.jpg" className="image"><img src="images/thumbs/08.jpg" alt="" /></a></article>
								<article className="item thumb span-1"><h2>You really got me</h2><a href="images/fulls/01.jpg" className="image"><img src="images/thumbs/01.jpg" alt="" /></a></article>
								<article className="item thumb span-2"><h2>Ad Infinitum</h2><a href="images/fulls/02.jpg" className="image"><img src="images/thumbs/02.jpg" alt="" /></a></article>
								<article className="item thumb span-1"><h2>Different.</h2><a href="images/fulls/03.jpg" className="image"><img src="images/thumbs/03.jpg" alt="" /></a></article>
								<article className="item thumb span-2"><h2>Kingdom of the Wind</h2><a href="images/fulls/05.jpg" className="image"><img src="images/thumbs/05.jpg" alt="" /></a></article>
								<article className="item thumb span-1"><h2>Elysium</h2><a href="images/fulls/04.jpg" className="image"><img src="images/thumbs/04.jpg" alt="" /></a></article>

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
								<li>&copy; Untitled</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
							</ul>
						</section>
					</section>

			</div>

  </Layout>
)

export default IndexPage
