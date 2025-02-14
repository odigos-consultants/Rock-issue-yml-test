//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by the Rock.CodeGeneration project
//     Changes to this file will be lost when the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------
// <copyright>
// Copyright by the Spark Development Network
//
// Licensed under the Rock Community License (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.rockrms.com/license
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
// </copyright>
//

import { Guid } from "@Obsidian/Types";

/**
 * An item bag used by the Campus Picker to gather additional details about
 * a campus.
 */
export type CampusPickerItemBag = {
    /** Gets or sets the campus status. */
    campusStatus?: Guid | null;

    /** Gets or sets the type of campus. */
    campusType?: Guid | null;

    /** Gets or sets the category for this item. */
    category?: string | null;

    /** Gets or sets a value indicating whether this campus is active. */
    isActive: boolean;

    /** Gets or sets the text. */
    text?: string | null;

    /** Gets or sets the value. */
    value?: string | null;
};
