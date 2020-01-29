import React from 'react'
import dynamic from 'next/dynamic'
import 'bootstrap/dist/css/bootstrap.min.css';
const DynamicImageComponent = dynamic(import('../../components/imageAnnotationDemo/ImageAnnotationDemo.js'), {
  ssr: false
})
const DynamicVideoComponent = dynamic(import('../../components/videoAnnotationDemo/VideoAnnotationDemo.js'), {
  ssr: false
})

export default class extends React.Component {
  static async getInitialProps({ req }) {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
    return { userAgent }
  }

  render() {
    return (
			<div>
				<div className="fixed-top px-3 text-right">
					<a href="https://www.npmjs.com/package/react-annotation-tool">
						<img src="https://img.shields.io/npm/v/react-annotation-tool.svg?branch=master" className="img-fluid" alt="Responsive image" />
					</a>
				</div>
				<DynamicImageComponent />
				<hr/>
				<DynamicVideoComponent />
			</div>
    )
  }
}