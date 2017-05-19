import React, { Component } from 'react';
import Error from './Error';

export class ComplaintListServic extends React.Component{

  constructor(props){

    super(props);

    this.state = {compaints: [],
                  errorMessage: null,
                };

  }

  const makeCancelable = (promise) => {
      let hasCanceled_ = false;

      const wrappedPromise = new Promise((resolve, reject) => {
          promise.then((val) =>
            hasCanceled_ ? reject({isCanceled: true}) : resolve(val)
          );
          promise.catch((error) =>
            hasCanceled_ ? reject({isCanceled: true}) : reject(error)
          );
        });

        return {
          promise: wrappedPromise,
          cancel() {
            hasCanceled_ = true;
          },
        };
  };



}
