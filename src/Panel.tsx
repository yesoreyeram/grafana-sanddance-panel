import React from 'react';
import { PanelProps } from '@grafana/data';
import { SimpleOptions } from 'types';
import * as deck from '@deck.gl/core';
import * as layers from '@deck.gl/layers';
import * as luma from '@luma.gl/core';
import * as vega from 'vega';
import { SandDance, SandDanceReact } from '@msrvida/sanddance-react';

interface Props extends PanelProps<SimpleOptions> { }
interface State { }

export class SimplePanel extends React.Component<Props, State> {
  componentDidMount() {
    SandDance.use(vega, deck, layers, luma);
  }
  render() {
    return (
      <div>
        SandDance Rendering goes here
      </div>
    )
  }
};