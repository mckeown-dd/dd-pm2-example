import tracer from 'dd-trace';
tracer.init({ startupLogs: true, service: 'test'}); // initialized in a different file to avoid hoisting.
export default tracer;
