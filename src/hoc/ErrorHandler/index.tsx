import { AxiosInstance } from "axios";
import React, { Component } from "react";
import Modal from "../../UI/Modal";

const ErrorHandler = (WrappedComponent: any, axios: AxiosInstance) => {
  return class extends Component {
    constructor(props: Readonly<{}>) {
      super(props);
    }

    reqInterceptor: any;
    resInterceptor: any;
    state = {
      error: null,
    };

    componentWillMount() {
      this.reqInterceptor = axios.interceptors.request.use((req) => {
        this.setState({ error: null });
        return req;
      });

      this.resInterceptor = axios.interceptors.response.use(
        (res) => res,
        (error) => {
          this.setState({ error: error });
        }
      );
    }

    componentWillUnmount() {
      axios.interceptors.request.eject(this.reqInterceptor);
      axios.interceptors.response.eject(this.resInterceptor);
    }

    errorConfirmedHandler = () => {
      this.setState({ error: null });
    };

    render() {
      return (
        <>
          <Modal
            show={this.state.error != null}
            close={this.errorConfirmedHandler}
          >
            {this.state.error && this.state.error
              ? (this.state.error as any).message
              : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </>
      );
    }
  };
};

export default ErrorHandler;
