export const note_template = `
{{#each notes}}
<label class="col1" title="Erledigungsdatum">{{dueAt}}</label>

<label class="col2" title="Titel">{{title}}</label>
<div class="col3" title="Wichtigkeit" disabled> {{importance}}
</div>
<div class="col1">
  <input type="checkbox" id="cbo" disabled {{#if isFinished}}checked>{{/if}}
    <label for="cbo" title="{{finishedAt}}">finished</label>{{#if finishedToday}}[Today]{{/if}}
    </div>

    <textarea class="col2x" disabled title="Beschreibung">{{description}}</textarea>
    <div>
    <a href="./note.html?id={{_id}}" >
    <button type="button" id="btnEdit" class="col4" title="Notiz-Nr:{{_id}}">edit</button>
    </a>
    <button type="button" id="btnDelete" class="col4" title="Notiz-Nr:{{_id}}">delete</button>
    </div>
  {{/each}}
  {{#unless notes.length}}
    No Notes found.
  {{/unless}}"
`;
