/* eslint-disable no-undef */
import { plugins } from '../plugins';

plugins.gulp.task('deploy', (cb) => {
    plugins.deploy.publish(path.join(process.cwd(), 'app'), cb);
});
