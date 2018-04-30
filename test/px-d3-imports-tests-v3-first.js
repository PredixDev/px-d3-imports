/**
 * @license
 * Copyright (c) 2018, General Electric
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

document.addEventListener("WebComponentsReady", function() {
  runCustomTests();
});

function runCustomTests() {
  suite('Check px.d3 exists', function() {
    test('Px.d3 exists', function() {
      assert.isDefined(Px.d3);
    });

    test('Px.d3 is v5', function() {
      assert.equal(Px.d3.version[0], '5');
    });

    test('d3 exists', function() {
      assert.isDefined(d3);
    });

    test('d3 is v3', function() {
      assert.equal(d3.version[0], '3');
    });

    test('d3Old was created', function() {
      assert.isDefined(Px.oldD3);
    });

    test('d3Old is v3', function() {
      assert.equal(Px.oldD3.version[0], '3');
    });
  });
}
