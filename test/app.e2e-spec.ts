import { HttpStatus } from '@nestjs/common';
import * as superagent from 'superagent';

describe('AppController (e2e)', () => {
  it('/api', (done) => {
    superagent.get('http://localhost:3009/api-json').end((err, res) => {
      expect(err).toBeNull();
      expect(res.status).toEqual(HttpStatus.OK);
      expect(res.body).toMatchInlineSnapshot(`
        Object {
          "components": Object {},
          "info": Object {
            "contact": Object {},
            "description": "",
            "title": "LAMS",
            "version": "1.0.0",
          },
          "openapi": "3.0.0",
          "paths": Object {
            "/{foo}/": Object {
              "get": Object {
                "operationId": "AppController_getHello",
                "parameters": Array [
                  Object {
                    "enumName": "FooEnum",
                    "in": "path",
                    "name": "foo",
                    "required": true,
                    "schema": Object {
                      "enum": Array [
                        "BAR",
                      ],
                      "type": "string",
                    },
                  },
                ],
                "responses": Object {
                  "200": Object {
                    "description": "",
                  },
                },
              },
            },
          },
          "servers": Array [],
          "tags": Array [],
        }
      `);
      done();
    });
  });
});
