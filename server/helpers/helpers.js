const spawn = require('child_process').spawn,
    config = require('../config/default'),
    cmd = config.rtmp_server.trans.ffmpeg;

const generateStreamThumbnail = (stream_key) => {
    const args = [
        '-y',
        '-i', 'rtmp://127.0.0.1:1935/live/'+stream_key,
        '-ss', '00:00:01',
        '-vframes', '1',
        '-vf', 'scale=-2:300',
        'server/thumbnails/'+stream_key+'.png',
    ];

    spawn(cmd, args, {
        detached: true,
        stdio: 'ignore',
        cwd:"..."
    }).unref();
};

module.exports = {
    generateStreamThumbnail : generateStreamThumbnail
};

