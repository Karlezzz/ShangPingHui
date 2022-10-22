<template>
    <div class="pagination">
        <button :disabled="pageNo === 1" @click="getPageNo(pageNo-1)">上一页</button>

        <button v-if="continuesPage.start > 1" @click="$emit('getPageNo',1)" :class="{active:pageNo===1}">1</button>
        <button v-if="continuesPage.start > 2">···</button>

        <button v-for="(page,index) in continuesPage.end" :key="index"
            v-if="page>=continuesPage.start&&page<=continuesPage.end" @click="getPageNo(page)"
            :class="{active:pageNo===page}">
            {{page}}
        </button>

        <button v-if="continuesPage.end < totalPage-1">···</button>
        <button v-if="continuesPage.end < totalPage" @click="getPageNo(totalPage)"
            :class="{active:pageNo===totalPage}">{{totalPage}}</button>

        <button :disabled="pageNo===totalPage" @click="getPageNo(pageNo+1)">下一页</button>
        <button style="margin-left: 30px">共 {{total}} 条</button>
    </div>
</template>



<script>
    export default {
        name: 'Pagination',
        props: ['pageNo', 'pageSize', 'total', 'continues'],
        computed: {
            totalPage() {
                return Math.ceil(this.total / this.pageSize)
            },
            continuesPage() {
                    let start, end = 0
                    const {
                        totalPage,
                        continues,
                        pageNo
                    } = this
                    if (totalPage >= continues + 4) {
                        if (pageNo >= continues && pageNo <= totalPage - continues + 1) {
                            start = pageNo - parseInt(continues / 2)
                        } else {
                            if (pageNo < continues) {
                                start = 1
                            } else if (pageNo > totalPage - continues + 1) {
                                start = totalPage - continues + 1
                            }
                        }
                        end = start + continues - 1
                    } else {
                        start = 1
                        end = totalPage
                    }
                    return {
                        start,
                        end
                    }
            },

        },
        methods: {
            getPageNo(pageNo) {
                this.$emit('getPageNo', pageNo)
            }

        }
    }
</script>

<style lang="less" scoped>
    .pagination {
        text-align: center;

        button {
            margin: 0 5px;
            background-color: #f4f4f5;
            color: #606266;
            outline: none;
            border-radius: 2px;
            padding: 0 4px;
            vertical-align: top;
            display: inline-block;
            font-size: 13px;
            min-width: 35.5px;
            height: 28px;
            line-height: 28px;
            cursor: pointer;
            box-sizing: border-box;
            text-align: center;
            border: 0;

            &[disabled] {
                color: #c0c4cc;
                cursor: not-allowed;
            }

            &.active {
                cursor: not-allowed;
                background-color: #409eff;
                color: #fff;
            }
        }
    }
</style>