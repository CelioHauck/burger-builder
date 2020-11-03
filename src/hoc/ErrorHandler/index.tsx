import { AxiosInstance } from "axios";
import React, { Component } from "react";
import Modal from "../../UI/Modal";

const ErrorHandler = (WrappedComponent: any, axios: AxiosInstance) => {
  return class extends Component {
    constructor(props: Readonly<{}>) {
      super(props);
      axios.interceptors.request.use((req) => {
        this.setState({ error: null });
        return req;
      });
      axios.interceptors.response.use(
        (res) => res,
        (error) => {
          this.setState({ error: error });
        }
      );
    }

    state = {
      error: null,
    };

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
