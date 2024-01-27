import React from "react";
import SortableTree, {toggleExpandedForAll} from "react-sortable-tree";
import TreeTheme from "react-sortable-tree-theme-full-node-drag";

import treeData from "./treeData";

const maxDepth = 100;

const alertInfo = ({node, path, treeIndex}) => {
    alert(`node: ${node}, path:${path}, treeIndex: ${treeIndex}`);
};

export default class App extends React.Component {
    state = {
        searchString: "",
        searchFocusIndex: 0,
        searchFoundCount: null,
        treeData
    };

    handleTreeOnChange = (treeData) => {
        this.setState({treeData});
    };

    render() {
        const {treeData, searchString, searchFocusIndex} = this.state;

        return (
            <div className="wrapper">
                <div className="tree-wrapper">
                    <SortableTree
                        theme={TreeTheme}
                        treeData={treeData}
                        onChange={this.handleTreeOnChange}
                        maxDepth={maxDepth}
                        searchQuery={searchString}
                        searchFocusOffset={searchFocusIndex}
                        canDrag={({node}) => !node.noDragging}
                        canDrop={({nextParent}) => !nextParent || !nextParent.noChildren}
                        searchFinishCallback={(matches) =>
                            this.setState({
                                searchFoundCount: matches.length,
                                searchFocusIndex:
                                    matches.length > 0 ? searchFocusIndex % matches.length : 0
                            })
                        }
                        isVirtualized={true}
                        generateNodeProps={(rowInfo) => ({
                            buttons: [
                                <button
                                    className="btn btn-outline-success"
                                    style={{ verticalAlign: "middle" }}
                                    onClick={() => alertInfo(rowInfo)}
                                >
                                    дія
                                </button>,
                                <button
                                    className="btn btn-outline-success"
                                    style={{ verticalAlign: "middle" }}
                                    onClick={() => alertInfo(rowInfo)}>
                                    видалити
                                </button>
                            ]
                        })}
                    />
                </div>
            </div>
        );
    }
}
