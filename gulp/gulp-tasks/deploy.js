import { plugins } from '../plugins';
const path = require('path');
plugins.gulp.task('deploy', (cb) => {
    plugins.deploy.publish(path.join(process.cwd(), 'app'), cb);
});
