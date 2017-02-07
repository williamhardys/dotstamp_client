/*eslint no-console: ["error", { allow: ["log", "error"] }] */
import React, {Component, PropTypes} from "react"
import Http from "../../utils/http"
import {Link} from "react-router"
import { ButtonToolbar, FormGroup, Col, Button, Grid, Row, Jumbotron } from "react-bootstrap"

export default class New extends Component {

    new() {
        let email = this.refs.email.value
        let password = this.refs.password.value

        let action = {
            email: email,
            password: password
        }
        console.log(action)

        Http.postApi("login/new/", action).then((response) => {
            console.log(response)
            console.log("登録しました")
            location.href = "/#/"
        }).catch((err) => {
            this.props.showError(err)
        })
    }
    /**
     * 描画する
     *
     * @return {object} html
     */
    render() {
        return (
            <Grid>
                <br/>
                <br/>
                <Row className="show-grid">
                    <Col md={6}>
                        <Jumbotron>
                              <h1>Hello, .Stamp!</h1>
                              <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                              <p><Button bsStyle="primary">Learn more</Button></p>
                        </Jumbotron>
                    </Col>
                    <Col md={6}>
                        <FormGroup controlId="formHorizontalEmail">
                            <input type="text" className="form-control" id="user" name="user" placeholder="メールアドレス" ref="email" />
                        </FormGroup>
                        <FormGroup controlId="formHorizontalPassword">
                            <input type="text" className="form-control" id="password" name="password" placeholder="パスワード" ref="password"/>
                        </FormGroup>
                        <FormGroup>
                            <Col smOffset={4}>
                                <ButtonToolbar>
                                    <Button bsStyle="link">キャンセル</Button>
                                    <Button bsStyle="success" onClick={() => this.new()}>
                                        規約に同意して登録する
                                    </Button>
                                </ButtonToolbar>
                            </Col>
                        </FormGroup>
                        <br />
                        <br />
                        <Link to="login/login">
                            <Button bsStyle="link">登録済みの場合は、こちら</Button>
                        </Link>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

New.propTypes = {
    showError: PropTypes.func
}
