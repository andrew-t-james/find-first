import DotEnv from 'dotenv';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({
  adapter: new Adapter(),
  disableLifecycleMethods: true
});

DotEnv.config({ path: '.env.test' });
