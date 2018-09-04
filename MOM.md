# MOM

## SOA

```mermaid
graph LR
    mono["
        <center>
            Monolithic Application
            <br/>
            🍎 🍐 🍊 🍋
        </center>
    "]

    serv1["MicroService 🍎"]
    serv2["MicroService 🍐"]
    serv3["MicroService 🍊"]
    serv4["MicroService 🍋"]

    serv1 --> serv2
    serv2 --> serv3
    serv1 --> serv4
```

- Small services
- Communication with lightweight mechanisms
- Built around business capabilities
- Independently deployable 

## Communication mechanism

### Synchronous / Asynchronous

- Synchronous

```mermaid
sequenceDiagram
    participant Client
    participant Service
    Client->>+Service: request
    Service-->>Service: task
    Service-->>-Client: response
```

Often an HTTP resource API.


- Asynchronous

```mermaid
sequenceDiagram
    participant Client
    participant Service
    Client->>+Service: request
    Service->>Client: acknowledgement
    Service-->>-Service: task
```

Often an AMQP broker.

### Single receiver / multiple receivers

- Single receiver

```mermaid
graph LR
    serv1["MicroService 🍎"]
    serv2["MicroService 🍐"]
    serv3["MicroService 🍊"]
    broker["Broker 🚚"]

    serv1-->broker
    broker-->serv2
    broker-.->serv3
```

Load balancing

- Multiple receivers

```mermaid
graph LR
    serv1["MicroService 🍎"]
    serv2["MicroService 🍐"]
    serv3["MicroService 🍊"]
    broker["Broker 🚚"]

    serv1-->broker
    broker-->serv2
    broker-->serv3
```

Publish/Subscribe




```mermaid
sequenceDiagram
    participant client as Client
    participant platform as API-Platform
    participant etcd as ETCD

    client->>platform: check availability
    platform->>etcd: find
    etcd->>platform: result
    platform->>client: availability?

    
    client->>platform: create platform
    platform->>etcd: insert platform
    etcd->>platform: OK
    platform->>MOOC: notify of creation
    platform->>cockpit: import content
    platform->>client: created
```
