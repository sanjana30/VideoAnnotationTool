import Link from 'next/link'
import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css"
import { Container, Row, Col, Card, CardBody, CardTitle, CardText } from 'reactstrap';
import { FaNpm, FaGit, FaLinkedin, FaFilePdf } from "react-icons/fa";

export default () => (
	<div>
		<Head>
		<title>Chi Lin_</title>
		<meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
		</Head>
		<Container className="">
			<Row className="pt-5" >
					<Col className="d-flex justify-content-center align-items-center" >
						<img src="/static/me.jpg" alt="avatar" className="rounded avatar" />
						<div className="pl-5">
							<h1 className="h1"><strong>Chi Lin_</strong></h1>
							<div className="mb-2">A Full-stack Developer with a passion for Human Computer Interaction</div>
							<div className="social-icon-wrapper">
								<span className="pr-1"><a href="https://github.com/bennylin77/"><FaGit style={{fontSize: 30}} /></a></span>
								|
								<span className="p-1"><a href="https://www.linkedin.com/in/chi-benny-lin-508b841a/"><FaLinkedin style={{fontSize: 25}} /></a></span>
								|
								<a href="https://www.dropbox.com/s/w04x1kyssvf17fq/resume.pdf?dl=0" target="_blank" ><span className="pl-1">rÃ©sumÃ©</span></a>
							</div>
						</div>
					</Col>
			</Row>
			<Row className="mt-5">
					<Col className="d-flex align-items-center justify-content-center" md={{ size: 4, offset: 1 }}>
						<p className="h2">Projects_</p>
					</Col>
					<Col md="7">
							<ul className="list-unstyled">
								<li className="pb-4">
									<div>
										<p className="h5">React Video & Image Annotation Tool</p>
									</div>
									<div>
									  A React NPM package for image and video annotation
									</div>
									<div className="social-icon-wrapper">
										<Link href="https://github.com/bennylin77/react-annotation-tool">
											<a><span className="pr-1"><FaGit style={{fontSize: 30}} /></span></a>
										</Link>
										|
										<Link href="https://www.npmjs.com/package/react-annotation-tool">
											<a><span className="px-1"><FaNpm style={{fontSize: 40}} /></span></a>
										</Link>
										|
										<Link href="/projects/react-annotation-tool">
											<a><span className="pl-1">Demo</span></a>
										</Link>
									</div>
								</li>
								<li>
									<div>
										<p className="h5">React Express Boilerplate</p>
									</div>
									<div>
									  A React & Express boilerplate with Passport.js & JWT authentication
									</div>
									<div className="social-icon-wrapper">
									<Link href="https://github.com/bennylin77/react-express-boilerplate">
										<a><span className="pr-1"><FaGit style={{fontSize: 30}} /></span></a>
									</Link>
									</div>
								</li>
							</ul>
					</Col>
			</Row>
			<Row>
				<Col>
					<hr />
				</Col>
			</Row>
			<Row className="mt-5">
					<Col className="d-flex align-items-center justify-content-center" md={{ size: 4, offset: 1 }}>
						<p className="h2">Publications_</p>
					</Col>
					<Col md="7">
							<ul className="list-unstyled">
								<li className="pb-4">
									<div>
										<p className="h5">VizWiz Grand Challenge: Answering Visual Questions from Blind People, CVPR 2018</p>
									</div>
									<div className="social-icon-wrapper">
										<Link href="https://arxiv.org/pdf/1802.08218.pdf">
											<a><span className="pr-1"><FaFilePdf style={{fontSize: 20}} /></span></a>
										</Link>
									</div>
								</li>
							</ul>
					</Col>
			</Row>
			<Row className="mt-5">
					<Col className="text-center">
						<img src="/static/Longhorns.png" alt="longhorns" className="longhorns" />
					</Col>
			</Row>
		</Container>
	</div>
)