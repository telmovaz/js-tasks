/**
 * In script.js there are few functions we will use 
 * to enable animation effect. Those functions are
 * singular, we need to combine them to get cool frog 
 * jum effect!
 * 
 * Your task:
 * 
 * 1. Create startJump() function
 * 2. Inside of startJump() body call jump() function with parameter true,
 *    this will enable animation
 * 3. Go to index.html, find a button for starting animation and add function
 *    inside onlclick attribute.
 * 4. Create stopJump() function
 * 5. Inside of stopJump() body call jump() function with parameter false,
 *    this will disable animation
 * 6. Go to index.html, find a button for stopping animation and add function
 *    inside onlclick attribute.
 * 7. Create function jumpFast(). This function must accept 3 parameters: speed of head,
 *    speed of legs and speed of body. Create some names for this parameters.
 *    Inside of this function you need to call jump() function with true as a parameter
 *    to enable animation. Go to new line after this and call setHeadSpeed() function and pass to
 *    it speed parameter for head speed. Example: setHeadSpeed(speedOfHead). Do the same with:
 * 
 *    setLegsSpeed(...)
 *    setBodySpeed(...)
 * 
 *    function jumpFast(..., ..., ...) {
 *      jump(true);
 *      setHeadSpeed(...);
 *      setLegsSpeed(...);
 *      setBodySpeed(...);
 *  }
 * 
 *   Go to index.html and add this function to onclick with some speed numbers (do not go more then 5)
 *   as a parameters.
 */

function startJump() {
    jump(true);
}

function stopJump() {
    jump(false);
}

function jumpFast(headspeed, legspeed, bodyspeed) {
    jump(true);
    setHeadSpeed(headspeed);
    setLegsSpeed(legspeed);
    setBodySpeed(bodyspeed);

}