import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

/**
 * Initialization data for the datawhys_experimental_control extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'datawhys_experimental_control:plugin',
  description: 'A JupyterLab extension that locks down the user interface and provides additional controls for running experiments using the JupyterLab platform. It is not configurable but may serve as an example for other projects.',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension datawhys_experimental_control is activated!');
  }
};

export default plugin;
