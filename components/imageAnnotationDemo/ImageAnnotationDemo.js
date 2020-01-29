import React, {Component} from 'react';
import {ImageTool} from "react-annotation-tool"
import { Container, Row, Col, Card, CardBody, CardTitle, CardText } from 'reactstrap';

class Demo extends Component {
	constructor(props){
		super(props)
		this.state = {result: null}
	}

	handleSubmit = (r) =>{
		this.setState({
			result: r
		})
	}

	render() {
		const {result} = this.state
		const annotations = [ { "id": "jlvnw6az", "name": "jlvnw6az", "closed": true, "color": "rgba(227,0,255,1)", "vertices": [ { "id": "jlvnw6az", "name": "jlvnw6az", "x": 189.5625, "y": 201 }, { "id": "jlvnw8qs", "name": "jlvnw8qs", "x": 309.25, "y": 200 }, { "id": "jlvnw9vp", "name": "jlvnw9vp", "x": 313.25, "y": 203 }, { "id": "jlvnwbvk", "name": "jlvnwbvk", "x": 316.25, "y": 288 }, { "id": "jlvnwczb", "name": "jlvnwczb", "x": 310.25, "y": 292 }, { "id": "jlvnwfhm", "name": "jlvnwfhm", "x": 187.25, "y": 294 }, { "id": "jlvnwgoe", "name": "jlvnwgoe", "x": 181.25, "y": 290 }, { "id": "jlvnwidd", "name": "jlvnwidd", "x": 183.25, "y": 205 } ], "selected": [ { "id": "0", "value": "root" }, { "id": "1", "value": "Electronic" }, { "id": "1-1", "value": "Laptop" }, { "id": "1-1-1", "value": "Apple" } ] }, { "id": "jlvnxa79", "name": "jlvnxa79", "color": "rgba(0,255,81,1)", "closed": true, "vertices": [ { "id": "jlvnxa79", "name": "jlvnxa79", "x": 369.25, "y": 350.5 }, { "id": "jlvnxbct", "name": "jlvnxbct", "x": 372.25, "y": 343.5 }, { "id": "jlvnxcg6", "name": "jlvnxcg6", "x": 387.25, "y": 341 }, { "id": "jlvnxdic", "name": "jlvnxdic", "x": 393.25, "y": 343 }, { "id": "jlvnxfp2", "name": "jlvnxfp2", "x": 424.25, "y": 342 }, { "id": "jlvnxgfx", "name": "jlvnxgfx", "x": 426.25, "y": 347 }, { "id": "jlvnxjd8", "name": "jlvnxjd8", "x": 381.25, "y": 350 } ], "selected": [ { "id": "0", "value": "root" }, { "id": "2", "value": "Stationery" }, { "id": "2-1", "value": "Pen" } ] } ]


	  const menu = {id: "0", value: "root", options: [
								   {id: "1", value: "Electronic", options: [
								      {id: "1-1", value: "Laptop", options: [
								         {id: "1-1-1", value: "Apple", options: []},
								         {id: "1-1-2", value: "Asus", options: []}
								      ]},
								      {id: "1-2", value: "Charger", options: []},
											{id: "1-3", value: "Wire", options: []},
								      {id: "1-4", value: "Watch", options: []}
								   ]},
								   {id: "2", value: "Stationery", options: [
								      {id: "2-1", value: "Pen", options: []},
								      {id: "2-2", value: "Eraser", options: []}
								   ]}
								]}
		return (
			<Container className="py-3">
				<h1 className="display-4 text-center">Image Tool</h1>
	      <Row className="py-3" style={{background: "rgb(246, 246, 246)"}}>
	          <Col>
							<ImageTool
												 annotationWidth={500}
												 onNextClick={this.handleSubmit}
												 onPreviousClick={this.handleSubmit}
												 onSkipClick={this.handleSubmit}
												 menu={menu}
												 category={"Others"}
												 categoryOptions = {["No Objects", "No Image"]}
												 dynamicOptions
												 annotations = {annotations}
												 disabledOptionLevels={[1]}
												 url={"https://images.pexels.com/photos/57750/pexels-photo-57750.jpeg"}/>
						</Col>
	      </Row>
				<Row className="my-3">
	          <Col>
							<Card>
							  <CardBody>
									<CardTitle>Output</CardTitle>
										<CardText>{JSON.stringify(result, null, 2)}</CardText>
							  </CardBody>
							</Card>
						</Col>
				</Row>
			</Container>
		);
	}
}
export default Demo;