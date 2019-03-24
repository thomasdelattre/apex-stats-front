import React from 'react';

import { storiesOf } from '@storybook/react';
import { linkTo } from '@storybook/addon-links';
import Graph from '../Progression/Graph.js';
import { Welcome } from '@storybook/react/demo';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Graph', module)
  .add('with datas', () => <Graph data={{"2017-01-01": 2, "2017-01-02": 5, "2017-01-03": 3, "2017-01-04": 4}} />)
  .add('without data', () => <Graph />);
