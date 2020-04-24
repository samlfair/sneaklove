console.log("hello");

const newSneaker = document.getElementById("btn_new_tag");
newSneaker.onclick = function () {
  const inputTag = document.getElementById("new_tag_name");
  const inputValue = inputTag.value;
  const selectTag = document.getElementById("tags");
  axios.post("/new-tag", { label: inputValue }).then((dbRes) => {
    inputTag.value = "";
    console.log(dbRes);
    selectTag.innerHTML += `<option value="${dbRes.data.response._id}">${inputValue}</option>`;
  });
};

