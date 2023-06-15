import { AWFunction } from '@tabnode/utils';
import { SetUp } from './util';

module.exports = async function (req: AWFunction.Req, res: AWFunction.Res) {
    await new SetUp(req).setup();
    res.send('OK', 200);
};
