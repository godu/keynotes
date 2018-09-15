# ![Reason](./reason.svg)

![Reason: Facebook's OCaml](./chenglou.png)

- OCaml syntax for JS programmers

![architecture](./architecture.jpg)

```reason
type result('a, 'b) =
  | Ok('a)
  | Error('b);

type myPayload = {data: string};

type myPayloadResults('errorType) = list(result(myPayload, 'errorType));

let payloadResults: myPayloadResults(string) = [
  Ok({data: "hi"}),
  Ok({data: "bye"}),
  Error("Something wrong happened!")
];
```