Module['update_fps'] = function() {}

Module['playttd_prerun'] = function() { 
  readUUID();
  createMusicFiles();

  var save_path = 'http://play-ttd.com/save/' + Module['UUID'] + '/';

  Module["FS_createPath"]('/', 'home/caiiiycuk/play-ttd/etc/preload/save', true, true);
  Module["FS_createPreloadedFile"]('/home/caiiiycuk/play-ttd/etc/preload/save', 'saved_on_server.sav', 
    save_path + 'saved_on_server.sav', true, true);
};

//'-d', '3'
Module['arguments'] = ['-s', 'null', '-m', 'em_midi', '-x', '-c', '/home/caiiiycuk/play-ttd/etc/preload/openttd.cfg'];