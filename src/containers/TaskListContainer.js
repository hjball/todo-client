import { connect } from 'react-redux';

import TaskList from '../components/TaskList';

const mapStateToProps = ({ tasks }) => ({ tasks });

export default connect(mapStateToProps)(TaskList);