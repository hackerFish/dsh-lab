# dsh-remote 安装日志（截断尾部 4000 字符）

```
_modules/ssh2 install: In file included from ../src/binding.cc:14:
.../.pnpm/ssh2@1.17.0/node_modules/ssh2 install: In file included from /Users/matiansa/Library/Caches/node-gyp/24.3.0/include/node/node.h:74:
.../.pnpm/ssh2@1.17.0/node_modules/ssh2 install: In file included from /Users/matiansa/Library/Caches/node-gyp/24.3.0/include/node/v8.h:24:
.../.pnpm/ssh2@1.17.0/node_modules/ssh2 install: In file included from /Users/matiansa/Library/Caches/node-gyp/24.3.0/include/node/v8-array-buffer.h:14:
.../.pnpm/ssh2@1.17.0/node_modules/ssh2 install: In file included from /Users/matiansa/Library/Caches/node-gyp/24.3.0/include/node/v8-object.h:11:
.../.pnpm/ssh2@1.17.0/node_modules/ssh2 install: /Users/matiansa/Library/Caches/node-gyp/24.3.0/include/node/v8-persistent-handle.h:493:26: warning: cast from 'typename WeakCallbackInfo<ObjectWrap>::Callback' (aka 'void (*)(const WeakCallbackInfo<ObjectWrap> &)') to 'Callback' (aka 'void (*)(const WeakCallbackInfo<void> &)') converts to incompatible function type [-Wcast-function-type-mismatch]
.../.pnpm/ssh2@1.17.0/node_modules/ssh2 install:   493 |                          reinterpret_cast<Callback>(callback), type);
.../.pnpm/ssh2@1.17.0/node_modules/ssh2 install:       |                          ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
.../.pnpm/ssh2@1.17.0/node_modules/ssh2 install: /Users/matiansa/Library/Caches/node-gyp/24.3.0/include/node/node_object_wrap.h:85:18: note: in instantiation of function template specialization 'v8::PersistentBase<v8::Object>::SetWeak<node::ObjectWrap>' requested here
.../.pnpm/ssh2@1.17.0/node_modules/ssh2 install:    85 |     persistent().SetWeak(this, WeakCallback, v8::WeakCallbackType::kParameter);
.../.pnpm/ssh2@1.17.0/node_modules/ssh2 install:       |                  ^
.../.pnpm/ssh2@1.17.0/node_modules/ssh2 install: In file included from ../src/binding.cc:14:
.../.pnpm/ssh2@1.17.0/node_modules/ssh2 install: In file included from /Users/matiansa/Library/Caches/node-gyp/24.3.0/include/node/node.h:74:
.../.pnpm/ssh2@1.17.0/node_modules/ssh2 install: In file included from /Users/matiansa/Library/Caches/node-gyp/24.3.0/include/node/v8.h:24:
.../.pnpm/ssh2@1.17.0/node_modules/ssh2 install: In file included from /Users/matiansa/Library/Caches/node-gyp/24.3.0/include/node/v8-array-buffer.h:14:
.../.pnpm/ssh2@1.17.0/node_modules/ssh2 install: In file included from /Users/matiansa/Library/Caches/node-gyp/24.3.0/include/node/v8-object.h:11:
.../.pnpm/ssh2@1.17.0/node_modules/ssh2 install: /Users/matiansa/Library/Caches/node-gyp/24.3.0/include/node/v8-persistent-handle.h:493:26: warning: cast from 'typename WeakCallbackInfo<ObjectWrap>::Callback' (aka 'void (*)(const WeakCallbackInfo<ObjectWrap> &)') to 'Callback' (aka 'void (*)(const WeakCallbackInfo<void> &)') converts to incompatible function type [-Wcast-function-type-mismatch]
.../.pnpm/ssh2@1.17.0/node_modules/ssh2 install:   493 |                          reinterpret_cast<Callback>(callback), type);
.../.pnpm/ssh2@1.17.0/node_modules/ssh2 install:       |                          ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
.../.pnpm/ssh2@1.17.0/node_modules/ssh2 install: ../../../../../../../nan@2.28.0/node_modules/nan/nan_object_wrap.h:64:50: note: in instantiation of function template specialization 'v8::PersistentBase<v8::Object>::SetWeak<Nan::ObjectWrap>' requested here
.../.pnpm/ssh2@1.17.0/node_modules/ssh2 install:    64 |     persistent().v8::PersistentBase<v8::Object>::SetWeak(
.../.pnpm/ssh2@1.17.0/node_modules/ssh2 install:       |                                                  ^
.../.pnpm/ssh2@1.17.0/node_modules/ssh2 install: 2 warnings generated.
.../.pnpm/ssh2@1.17.0/node_modules/ssh2 install:   SOLINK_MODULE(target) Release/sshcrypto.node
.../.pnpm/ssh2@1.17.0/node_modules/ssh2 install: gyp info ok 
.../.pnpm/ssh2@1.17.0/node_modules/ssh2 install: Succeeded in building optional crypto binding
.../.pnpm/ssh2@1.17.0/node_modules/ssh2 install: Done

dependencies:
+ dsh-remote 0.5.7

Done in 30.1s

```
