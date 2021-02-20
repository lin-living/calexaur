##  object update status
beforeUpdate: before varchagne,
onMount: object ready, the return function will be call onDestroy!!
afterUpdate: variable change, 
onDestroy: object free,

beforUpdate=>onMoint=>afterUpdate=>onDestrop;
beforUpdate=>afterUpdate;


## html reander condition

    1. if 
    {#if condition}
        html block
    {:else}
        html block
    {/if}

    2. each
    {#each array as element | (idx)}
        html block
    {/each}
    ps. w/ idx the re-render will follow the idx

    3. await
    {#await promis_ft}
        html block //still not response
    {:then return_var_name}
        html block //value return
    {:catch err_var_name}
        html block //catch
    {/await}

## 3 kind of block
<script lang="ts">
    export let export_var: string = "test"; // let var been access, 
    // when object create 
    // const obj1 = new obj({
	// target: document.body, // append target
	// props:{
	// 	export_var:"test"
	// }
    // });
    when var value change, render <html_tag> {var};
    if var as html string, use {@html htmlvarname} to render;
    $: formate_varname = `${varname}` //trigger exe block when varname change
    $: console.log(varname) //trigger exe block when varname change
</script>

<style>
</style>

<html_tag>
    {varname}
    {@html htmlvarname}  <!--// render var as html -->
</html_tag>


## change svelte props
    let ch = new some_svelte{target:htmlelement,props:{exportvar:data}}
    ch.$set({exportvar:data});

## binding
### event binging
<html_tag on:eventname[|modifier]:{any_function}>    
</html_tag>
### modifiers
>once: only processes once,systeml will unbinding the event
preventDefault:cancel html default handling
stopPropgation:canael html trigger
capture: trigger on event trigger
self:only trigger when e.target == self
ps. the event of sub-sevlte can be handled only when export
https://svelte.dev/examples#dom-event-forwarding


### var binging
<html_tag bing:domname={varname}>    
</html_tag>
<html_tag bing:this={varname}>    
</html_tag>
<html_tag bing:group={varname} value={value}>    
</html_tag>



## custom event trigger
 svelte aaa
  let dispatch = createEventDispatcher();
  dispatch("eventName",param:{}); //param set into e.detail

 sevete b;
    import aaa from aaa;
    <aaa on:eventName:{}>

## store & context
    ###store
    - readable:object w/ ft suscribe, the function return unsuscribe f.t

## markdown render 
import marked from 'marked';
{@html marked(text)}
