<template>
  <p>This is my chat room</p>
  <div class="App">

    <div class="box">
      <div class="messages"></div>
      <ul id="messages"></ul>
      <form id="form" action="">
        <input id="input" autocomplete="off" /><button>Send</button>
      </form>
    </div>
  </div>
</template>


<script>
import { io } from 'socket.io-client';

export default {
  setup() {

    const socket = io





    return {}
  }
}
</script>


<style lang="scss" scoped>
body {
  margin: 0;
  padding-bottom: 3rem;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}

#form {
  background: rgba(0, 0, 0, 0.15);
  padding: 0.25rem;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  height: 3rem;
  box-sizing: border-box;
  backdrop-filter: blur(10px);
}

#input {
  border: none;
  padding: 0 1rem;
  flex-grow: 1;
  border-radius: 2rem;
  margin: 0.25rem;
}

#input:focus {
  outline: none;
}

#form>button {
  background: #333;
  border: none;
  padding: 0 1rem;
  margin: 0.25rem;
  border-radius: 3px;
  outline: none;
  color: #fff;
}

#messages {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

#messages>li {
  padding: 0.5rem 1rem;
}

#messages>li:nth-child(odd) {
  background: #efefef;
}</style>