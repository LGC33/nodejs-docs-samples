// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

const {assert} = require('chai');
const {describe, it} = require('mocha');
const execSync = require('child_process').execSync;
const exec = cmd => execSync(cmd, {encoding: 'utf8'});

describe('detect intent with audio input', () => {
  const cmd = 'node detect-intent-audio.js';

  const projectId = process.env.GCLOUD_PROJECT;
  const location = 'global';
  const agentId = 'b1808233-450b-4065-9492-bc9b40151641';
  const audioFileName = 'resources/book_a_room.wav';
  const encoding = 'AUDIO_ENCODING_LINEAR_16';
  const sampleRateHertz = 16000;
  const languageCode = 'en';

  it('should response to "book a room"', async () => {
    const output = exec(
      `${cmd} ${projectId} ${location} ${agentId} ${audioFileName} ${encoding} ${sampleRateHertz} ${languageCode}`
    );
    console.log(output);
    assert.include(output, '?');
  });
});
