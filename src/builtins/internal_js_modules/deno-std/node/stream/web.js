// Copyright 2018-2023 the Deno authors. All rights reserved. MIT license.
const _ByteLengthQueuingStrategy = ByteLengthQueuingStrategy,
  _CountQueuingStrategy = CountQueuingStrategy,
  _ReadableByteStreamController = ReadableByteStreamController,
  _ReadableStream = ReadableStream,
  _ReadableStreamDefaultController = ReadableStreamDefaultController,
  _ReadableStreamDefaultReader = ReadableStreamDefaultReader,
  _TextDecoderStream = TextDecoderStream,
  _TextEncoderStream = TextEncoderStream,
  _TransformStream = TransformStream,
  _TransformStreamDefaultController = TransformStreamDefaultController,
  // TODO @wasmer: Add implementation for these classes, add re-exports back in
  //   _WritableStreamDefaultController = WritableStreamDefaultController,
  //   _WritableStreamDefaultWriter = WritableStreamDefaultWriter,
  _WritableStream = WritableStream;
export {
  _ByteLengthQueuingStrategy as ByteLengthQueuingStrategy,
  _CountQueuingStrategy as CountQueuingStrategy,
  _ReadableByteStreamController as ReadableByteStreamController,
  _ReadableStream as ReadableStream,
  _ReadableStreamDefaultController as ReadableStreamDefaultController,
  _ReadableStreamDefaultReader as ReadableStreamDefaultReader,
  _TextDecoderStream as TextDecoderStream,
  _TextEncoderStream as TextEncoderStream,
  _TransformStream as TransformStream,
  _TransformStreamDefaultController as TransformStreamDefaultController,
  _WritableStream as WritableStream,
  //   _WritableStreamDefaultController as WritableStreamDefaultController,
  //   _WritableStreamDefaultWriter as WritableStreamDefaultWriter,
};
export default {
  ReadableStream,
  ReadableStreamDefaultReader,
  ReadableByteStreamController,
  ReadableStreamDefaultController,
  TransformStream,
  TransformStreamDefaultController,
  WritableStream,
  //   WritableStreamDefaultWriter,
  //   WritableStreamDefaultController,
  ByteLengthQueuingStrategy,
  CountQueuingStrategy,
  TextEncoderStream,
  TextDecoderStream,
};
